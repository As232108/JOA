import React from "react";

const Orginization = () => {
  const members = [
    {
      name: "RK Anand",
      role: "President",
      img: "https://res.cloudinary.com/dwd6bd0zy/image/upload/v1758388901/RKANAND_nsbllg.jpg",
    },
    {
      name: "MK Pathak",
      role: "General Secretary",
      img: "https://res.cloudinary.com/dwd6bd0zy/image/upload/v1758388901/RKANAND_nsbllg.jpg",
    },
    {
      name: "Shivendra Nath Dubey",
      role: "Treasurer",
      img: "https://res.cloudinary.com/dwd6bd0zy/image/upload/v1758388901/RKANAND_nsbllg.jpg",
    },
  ];

  return (

    <>
    
     <div className="flex items-center justify-center bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Organization
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-orange-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>      
    </div>
    
    
    
    </>
   
    
  );
};

export default Orginization;
