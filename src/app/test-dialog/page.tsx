'use client';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function TestPage() {
  return (
    <div className="p-20">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          Test Content
        </DialogContent>
      </Dialog>
    </div>
  );
}
