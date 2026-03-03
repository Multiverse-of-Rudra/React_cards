import React from "react";
import Card from "./components/card";

const App = () => {
  const jobOpenings = [
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      companyName: "Google",
      postedOn: "5 days ago",
      jobPost: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45 per hour",
      location: "Bangalore, India",
    },
    {
      companyLogo:
        "https://www.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=174&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", // Meta logo
      companyName: "Meta",
      postedOn: "2 weeks ago",
      jobPost: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60 per hour",
      location: "Menlo Park, USA",
    },
    {
      companyLogo:
        "https://www.bing.com/th/id/OIP.JM19VAZ_Zne9RxsnEpUe5gHaHa?w=211&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", // Apple logo
      companyName: "Apple",
      postedOn: "10 weeks ago",
      jobPost: "iOS Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40 per hour",
      location: "Mumbai, India",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", // Netflix logo
      companyName: "Netflix",
      postedOn: "3 days ago",
      jobPost: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70 per hour",
      location: "Los Gatos, USA",
    },
    {
      companyLogo:
        "https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=207&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", // Amazon logo
      companyName: "Amazon",
      postedOn: "1 week ago",
      jobPost: "Cloud Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65 per hour",
      location: "Hyderabad, India",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft logo
      companyName: "Microsoft",
      postedOn: "4 weeks ago",
      jobPost: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50 per hour",
      location: "Redmond, USA",
    },
    {
      companyLogo:
        "https://www.bing.com/th/id/OIP.5Ih3fXWRacdLdKqV8Hrb7QHaHa?w=172&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", // Tesla logo
      companyName: "Tesla",
      postedOn: "6 days ago",
      jobPost: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75 per hour",
      location: "Berlin, Germany",
    },
    {
      companyLogo:
        "https://www.bing.com/th/id/OIP.zDbJfohjoZkSx8i9gj-bYgHaE0?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", // NVIDIA logo
      companyName: "NVIDIA",
      postedOn: "8 weeks ago",
      jobPost: "AI Researcher",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80 per hour",
      location: "Santa Clara, USA",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Oracle logo
      companyName: "Oracle",
      postedOn: "2 days ago",
      jobPost: "Database Administrator",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35 per hour",
      location: "Pune, India",
    },
    {
      companyLogo:
        "https://www.bing.com/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?w=176&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", // Adobe logo
      companyName: "Adobe",
      postedOn: "9 weeks ago",
      jobPost: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55 per hour",
      location: "San Jose, USA",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <Card
            company={elem.companyName}
            logo={elem.companyLogo}
            postedOn={elem.postedOn}
            jobPost={elem.jobPost}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
