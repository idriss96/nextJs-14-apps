import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
}) {
  return (
    <>
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDialog(false);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
               Add New Blog
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placeholder="Enter blog title"
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name="description"  
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddNewBlog;
