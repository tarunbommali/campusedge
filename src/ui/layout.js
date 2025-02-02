export const Button = ({ children, ...props }) => (
    <button className="px-4 py-2 bg-blue-500 text-white rounded" {...props}>
      {children}
    </button>
  );
  
  export const Input = (props) => (
    <input className="border p-2 m-2  bg-white rounded w-full" {...props} />
  );
  
  export const Textarea = (props) => (
    <textarea className="border p-2 m-2 bg-white rounded w-full" {...props} />
  );
  