"use client";
import { createComment } from "@/db/queries/comment";
import { CircleUser } from "lucide-react";
import { toast } from "react-toastify";

type CommentProps = {
  commentBy: string;
  courseId: string;
  comments: any;
};

export default function Comment({
  commentBy,
  courseId,
  comments,
}: CommentProps) {
  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("title");
    const response = await createComment(title, commentBy, courseId);
    if (response.success) {
      toast.success(response.message);
    } else if (!response.success) {
      toast.error(response.message);
    }
  };
  return (
    <div className="bg-[#00293d] shadow rounded-md p-6">
      <h2 className="text-xl font-semibold text-[#b4cdfa] mb-4">Discussion</h2>
      <div className="space-y-4">
        {comments.map((comment: any) => (
          <div className="px-3 py-2 rounded-md text-[#93c5d1] bg-[#003652] flex gap-2 ">
            <CircleUser />
            <div>
              <p className=" font-semibold">{comment.commentBy}</p>
              <p className=" text-sm">{comment.title}</p>
            </div>
          </div>
        ))}

        <form action={handleSubmit}>
          <textarea
            name="title"
            placeholder="Write a comment..."
            className="w-full border rounded-lg p-2 text-sm bg-[#00293d] text-[#93c5d1]"
          />
          <button type="submit" className="btn-alt-2">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}
