import React,{useState} from 'react'
import { Textarea, Input,Button } from '../ui/layout';

const AIMockForm = ({ onStart, loading }) => {
    const [jobRole, setJobRole] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState("");
  
    const handleSubmit = () => {
      if (!jobRole || !description || !techStack) return;
      onStart({ jobRole, company, description, techStack });
    };
  
    return (
      <div className="p-6 rounded-lg shadow-md bg-white my-6">
        <h2 className="text-xl font-semibold mb-4">Enter Job Details</h2>
        <Input placeholder="Job Role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
        <Input placeholder="Company (Optional)" value={company} onChange={(e) => setCompany(e.target.value)} />
        <Textarea placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input placeholder="Tech Stack (e.g., React, Node.js)" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
        <Button onClick={handleSubmit} disabled={loading} className="mt-4">
          {loading ? "Generating..." : "Start Mock Interview"}
        </Button>
      </div>
    );
  };

export default AIMockForm