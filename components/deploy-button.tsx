import Link from "next/link";
import { Button } from "./ui/button";

export default function DeployButton() {
  return (
    <>
      <Link href="/contact/">
        <Button className="flex items-center gap-2" size={"sm"}>
          <span>Contact Us</span>
        </Button>
      </Link>
    </>
  );
}
