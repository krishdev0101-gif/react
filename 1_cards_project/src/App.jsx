import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Software Engineer, Google Cloud",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$65/hr",
      location: "Mountain View, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      post: "Data Center Engineering Operations Specialist",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$42/hr",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Senior Front-End Engineer, Instagram",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$95/hr",
      location: "London, UK"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Associate (AWS)",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$35/hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "4 days ago",
      post: "AI/ML Language Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$72/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "Content Delivery Network (Open Connect) Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$110/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      companyName: "Google",
      datePosted: "10 days ago",
      post: "Technical Account Manager, GCP",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$58/hr",
      location: "Zurich, Switzerland"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Azure Core Solutions Architect",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$88/hr",
      location: "Tokyo, Japan"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "3 weeks ago",
      post: "Machine Learning Intern",
      tag1: "Part time",
      tag2: "Junior level",
      pay: "$28/hr",
      location: "Toronto, Canada"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "6 days ago",
      post: "Data Scientist, Product Analytics",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$68/hr",
      location: "New York, USA"
    }
  ];

  // console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx} >
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay} datePosted={elem.datePosted} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App