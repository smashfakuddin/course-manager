export default function AddResourceForm({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (data: any) => void; // 👈 parent handles add/edit
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const title = (form.elements.namedItem("title") as HTMLInputElement)?.value;
    const url = (form.elements.namedItem("url") as HTMLInputElement)?.value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    )?.value;

    const payload = { title, url, description };

    onSubmit(payload);
    onClose();
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-center text-2xl font-semibold tracking-tighter">
        Add Resource for Omuk
      </h2>

      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Resource Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Introduction To The Anp"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium "
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g Awesome Course Detail"
          required
        />
      </div>
      <div>
        <label
          htmlFor="url"
          className="block mb-2 text-sm font-medium "
        >
          Resource Url
        </label>
        <input
          type="text"
          id="url"
          name="url"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g https://drive.google.com/your-resource"
          required
        />
      </div>

      <button className="btn-alt w-full" type="submit">
        Add
      </button>
    </form>
  );
}
