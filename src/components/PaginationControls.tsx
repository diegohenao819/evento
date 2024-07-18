import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btsStyle =
  "text-white flex  items-center gap-x-2  px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const PaginationControls = ({
  previousPath,
  nextPath,
}: PaginationControlsProps) => {
  return (
    <div className="flex w-full justify-center gap-8 ">
      {previousPath ? (
        <Link href={previousPath} className={btsStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btsStyle}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
};

export default PaginationControls;
