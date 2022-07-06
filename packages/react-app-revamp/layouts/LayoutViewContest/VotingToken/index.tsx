import { useStore } from "@hooks/useContest/store";
import { isAfter, isBefore } from "date-fns";
import shallow from "zustand/shallow";

export const VotingToken = () => {
  const { currentUserTotalVotesCast, votingToken, votesOpen, currentUserAvailableVotesAmount } = useStore(
    state => ({
      //@ts-ignore
      votesOpen: state.votesOpen,
      //@ts-ignore
      votingToken: state.votingToken,
      //@ts-ignore
      currentUserAvailableVotesAmount: state.currentUserAvailableVotesAmount,
      //@ts-ignore
      currentUserTotalVotesCast: state.currentUserTotalVotesCast,
    }),
    shallow,
  );
  return (
    <>
      <div className="font-black leading-snug flex flex-wrap space-i-1ex md:space-i-0 md:flex-col items-center slashed-zero tabular-nums">
        <span className="text-sm font-bold">
          {isBefore(new Date(), votesOpen)
            ? "Available votes"
            : isAfter(new Date(), votesOpen)
            ? "Used votes:"
            : "Votes remaining:"}
        </span>
        {isBefore(new Date(), votesOpen) ? (
          <>
            <span
              title={new Intl.NumberFormat().format(currentUserAvailableVotesAmount)}
              className="text-center text-md text-neutral-8 pt-2"
            >
              <span aria-hidden="true" className="hidden md:inline-block">
                {currentUserAvailableVotesAmount > 1000000000
                  ? new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 3,
                    }).format(parseFloat(currentUserAvailableVotesAmount))
                  : new Intl.NumberFormat().format(currentUserAvailableVotesAmount)}
              </span>
              <span className="md:hidden">{new Intl.NumberFormat().format(currentUserAvailableVotesAmount)}</span>
            </span>
          </>
        ) : (
          <>
            <span title={new Intl.NumberFormat().format(currentUserTotalVotesCast)} className="text-lg">
              <span aria-hidden="true" className="hidden md:inline-block">
                {currentUserTotalVotesCast > 1000000000
                  ? Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 3,
                    }).format(parseFloat(currentUserTotalVotesCast))
                  : new Intl.NumberFormat().format(currentUserTotalVotesCast)}
              </span>
              <span className="md:hidden">{new Intl.NumberFormat().format(currentUserTotalVotesCast)}</span>
            </span>
            <span
              title={new Intl.NumberFormat().format(currentUserAvailableVotesAmount)}
              className="text-center text-md text-neutral-8"
            >
              <span className="px-1ex">of</span>
              <span aria-hidden="true" className="hidden md:inline-block">
                {currentUserAvailableVotesAmount > 1000000000
                  ? new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 3,
                    }).format(parseFloat(currentUserAvailableVotesAmount))
                  : new Intl.NumberFormat().format(currentUserAvailableVotesAmount)}
              </span>
              <span className="md:hidden">{new Intl.NumberFormat().format(currentUserAvailableVotesAmount)}</span>
            </span>
          </>
        )}

        <span className="text-xs font-bold text-neutral-7">${votingToken?.symbol}</span>
      </div>
    </>
  );
};

export default VotingToken;
