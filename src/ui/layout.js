export const Button = ({ children, ...props }) => (
    <button className="btn px-4 py-2 bg-blue-500 text-white rounded" {...props}>
      {children}
    </button>
  );
  
  export const Input = (props) => (
    <input className="input input-bordered w-full max-w-xs bg-white" {...props} />
  );
  
  export const Textarea = (props) => (
    <textarea className="input input-bordered w-full max-w-xs" {...props} />
  );
  