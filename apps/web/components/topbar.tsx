import { Button } from "./ui/button";

export default function TopBar() {
  return (
    <div className=" flex justify-between border-b border-gray-200 py-3 shadow-sm text-center">
      <div className="ml-50 ">
        <Button className="hover:cursor-pointer	">Shrinky</Button>
      </div>

      <div className="flex space-x-8 mr-50">
        <Button className="hover:cursor-pointer">Login</Button>

        <Button className="hover:cursor-pointer">Sign up</Button>
      </div>
    </div>
  );
}
