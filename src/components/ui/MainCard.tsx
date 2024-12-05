import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
export default function MainCard({ itemss }) {
  const { title, image, time, description, vegan } = itemss;
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src={image} alt="image" />
        </Avatar>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{time} mins to cook.</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Read More</Button>
        {vegan && <Badge variant="secondary">Vegan!</Badge>}
      </CardFooter>
    </Card>
  );
}
