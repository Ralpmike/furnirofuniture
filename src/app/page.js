import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";

export default function Home() {
  return (
    <div>
      <Input placeHolder="Enter your name" />
      <Button title="Submit" isBorder={true} />
      <Select />
    </div>
  );
}
