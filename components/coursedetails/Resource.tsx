import { deleteResourceById } from "@/db/queries/resource";
import { DeleteIcon, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

type ResourceProps = {
  title: string;
  description: string;
  url: string;
};
export default function Resource({ resources, outlineId }: any) {
  console.log(outlineId);
  const handleDeleteResource = async (resourceId: string) => {
    try {
      const response = await deleteResourceById(resourceId, outlineId);
      if (response.success) {
        toast.success(response.message);
      } else if (!response.success) {
        toast.error(response.message);
      }
    } catch (error) {}
  };
  return (
    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
      {resources.length > 0 ? (
        resources.map((resource: any, index: number) => (
          <li key={index} className="flex items-center cursor-pointer gap-4">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // 👈 prevents accordion toggle
              className="text-blue-600 hover:underline"
            >
              {resource.title}
            </a>
            <Trash2
              className="h-4 w-4 cursor-pointer"
              onClick={() => handleDeleteResource(resource?._id.toString())}
            />
          </li>
        ))
      ) : (
        <div>Nothing To Show Here</div>
      )}
    </ul>
  );
}
