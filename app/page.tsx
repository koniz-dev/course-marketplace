import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Button variant="elevated">Click me!</Button>
      <Input type="text" placeholder="Enter your name" />
      <Textarea placeholder="Enter your message" />
      <Progress value={50} />
      <Checkbox />
    </div>
  );
}
