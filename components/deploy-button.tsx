import Link from "next/link";
import { Button } from "./ui/button";

export default function DeployButton() {
  return (
    <>
      <Link href="/contact/">
        <Button className="flex items-center mx-2 gap-2" size={"sm"}>
          <span>Contacteer Ons</span>
        </Button>
      </Link>
    </>
  );
}
