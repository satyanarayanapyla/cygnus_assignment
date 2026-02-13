import React, { useState, useMemo } from "react";
import Navbar from "../NavbarFolder/Navbar";
import "./HomePage.css";

const jobsData = [
  { id: 1, title: "Frontend Intern", company: "Acme Corp", location: "Remote", type: "Internship" },
  { id: 2, title: "Backend Developer", company: "TechNova", location: "Hyderabad", type: "Full-time" },
  { id: 3, title: "UI Designer", company: "PixelWorks", location: "Remote", type: "Full-time" },
  { id: 4, title: "React Developer", company: "CodeCraft", location: "Bangalore", type: "Full-time" },
  { id: 5, title: "Node.js Intern", company: "DevStudio", location: "Chennai", type: "Internship" },
  { id: 6, title: "Software Engineer", company: "Infosys", location: "Hyderabad", type: "Full-time" },
  { id: 7, title: "Product Manager", company: "Flipkart", location: "Bangalore", type: "Full-time" },
  { id: 8, title: "QA Tester", company: "Amazon", location: "Remote", type: "Full-time" },
  { id: 9, title: "Data Analyst Intern", company: "TCS", location: "Mumbai", type: "Internship" },
  { id: 10, title: "Full Stack Developer", company: "Wipro", location: "Chennai", type: "Full-time" },
  { id: 11, title: "Angular Developer", company: "HCL", location: "Noida", type: "Full-time" },
  { id: 12, title: "Java Developer", company: "Capgemini", location: "Hyderabad", type: "Full-time" },
  { id: 13, title: "Marketing Intern", company: "Zomato", location: "Remote", type: "Internship" },
  { id: 14, title: "DevOps Engineer", company: "Cognizant", location: "Bangalore", type: "Full-time" },
  { id: 15, title: "HR Executive", company: "Meesho", location: "Mumbai", type: "Full-time" },
  { id: 16, title: "React Native Developer", company: "Byjus", location: "Chennai", type: "Full-time" },
  { id: 17, title: "Business Analyst", company: "Accenture", location: "Hyderabad", type: "Full-time" },
  { id: 18, title: "Content Writer Intern", company: "Swiggy", location: "Remote", type: "Internship" },
  { id: 19, title: "Python Developer", company: "IBM", location: "Bangalore", type: "Full-time" },
  { id: 20, title: "Machine Learning Intern", company: "Google", location: "Remote", type: "Internship" },
  { id: 21, title: "Technical Support", company: "Dell", location: "Noida", type: "Full-time" },
  { id: 22, title: "Graphic Designer", company: "Adobe", location: "Mumbai", type: "Full-time" },
  { id: 23, title: "Cloud Engineer", company: "Microsoft", location: "Hyderabad", type: "Full-time" },
  { id: 24, title: "Cyber Security Analyst", company: "Oracle", location: "Bangalore", type: "Full-time" },
  { id: 25, title: "Operations Intern", company: "Uber", location: "Remote", type: "Internship" },
];

function HomePage() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredJobs = useMemo(() => {
    return jobsData
      .filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter(job =>
        locationFilter ? job.location === locationFilter : true
      )
      .filter(job =>
        typeFilter ? job.type === typeFilter : true
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [search, locationFilter, typeFilter]);

  const highlightText = (text) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <h2>Available Jobs</h2>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All Locations</option>
            <option>Remote</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Mumbai</option>
            <option>Noida</option>
          </select>

          <select onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All Types</option>
            <option>Internship</option>
            <option>Full-time</option>
          </select>
        </div>

        {/* Job Cards */}
        <div className="job-grid">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <h3
                dangerouslySetInnerHTML={{
                  __html: highlightText(job.title),
                }}
              ></h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
