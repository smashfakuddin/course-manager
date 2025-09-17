export default function AddOutlineForm({ outlineObject }: any) {
  const { title, description } = outlineObject;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const title = (form.elements.namedItem("title") as HTMLInputElement)?.value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    )?.value;

    console.log({ title, description }); // logs an object
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-center text-2xl font-semibold tracking-tighter">
        Add Your Outline
      </h2>

      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Outline Title
        </label>
        <input
          type="text"
          id="title"
          name="title" // 👈 IMPORTANT
          defaultValue={title}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Outline Description
        </label>
        <input
          type="text"
          id="description"
          name="description" // 👈 IMPORTANT
          defaultValue={description}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description"
          required
        />
      </div>

      <button className="btn-main w-full" type="submit">
        Add
      </button>
    </form>
  );
}
