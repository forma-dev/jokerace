import {
  SubmissionMerkle,
  SubmissionRequirements,
  VotingMerkle,
  VotingRequirements,
} from "@hooks/useDeployContest/types";
import { FC, useState } from "react";
import { Steps } from "../..";
import CreateContestConfirmLayout from "../Layout";
import { SubmissionType, SubmissionTypeOption } from "@hooks/useDeployContest/store";
import CreateContestConfirmSubmitters from "./components/Submitters";
import CreateContestConfirmVoters from "./components/Voters";
import { useMediaQuery } from "react-responsive";
import { Option } from "@components/_pages/Create/components/TagDropdown";

export type SubmissionMerkleAllowlists = {
  manual: SubmissionMerkle | null;
  csv: SubmissionMerkle | null;
  prefilled: SubmissionMerkle | null;
};

export type VotingMerkleAllowlists = {
  manual: VotingMerkle | null;
  csv: VotingMerkle | null;
  prefilled: VotingMerkle | null;
};

interface CreateContestConfirmAllowlistsProps {
  allowlists: {
    submissionMerkle: SubmissionMerkleAllowlists;
    votingMerkle: VotingMerkleAllowlists;
    submissionRequirements: SubmissionRequirements;
    submissionRequirementsOption: Option;
    votingRequirements: VotingRequirements;
    submissionTypeOption: SubmissionTypeOption;
  };
  step: Steps;
  onClick?: (step: Steps) => void;
}

const CreateContestConfirmAllowlists: FC<CreateContestConfirmAllowlistsProps> = ({ allowlists, step, onClick }) => {
  const {
    submissionMerkle,
    votingMerkle,
    submissionRequirements,
    votingRequirements,
    submissionTypeOption,
    submissionRequirementsOption,
  } = allowlists;
  const [isHovered, setIsHovered] = useState(false);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <CreateContestConfirmLayout onClick={() => onClick?.(step)} onHover={value => setIsHovered(value)}>
      <div
        className={`flex flex-col gap-4 ${
          isHovered || isMobileOrTablet ? "text-neutral-11" : "text-neutral-14"
        } transition-colors duration-300`}
      >
        <p className="text-[16px] font-bold">allowlists:</p>
        <ul className="flex flex-col pl-8">
          <CreateContestConfirmSubmitters
            submissionMerkle={submissionMerkle}
            submissionRequirements={submissionRequirements}
            submissionTypeOption={submissionTypeOption}
            submissionRequirementsOption={submissionRequirementsOption}
          />
          <CreateContestConfirmVoters votingMerkle={votingMerkle} votingRequirements={votingRequirements} />
        </ul>
      </div>
    </CreateContestConfirmLayout>
  );
};

export default CreateContestConfirmAllowlists;
