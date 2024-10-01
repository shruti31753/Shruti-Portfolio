import React from 'react'

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Education</h1>
        {/* <p className="text-lg mb-8">This is a paragraph about education.</p> */}
        <p className="text-2xl text-gray-600 text-center mb-8">I recently focused on enhancing my skills and knowledge, embracing challenges, and seeking opportunities for growth in my educational journey.</p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-transparent border-2 border-purple-900 hover:border-purple-500 rounded-lg p-12 w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4 mx-2">
        <h2 className="text-lg font-bold mb-2">Pranveer Singh Institute of Technology, Kanpur</h2>
        <h3 className="text-1xl text-gray-600 font-semi mb-2">Bachelor of Technology - B.Tech in Computer Science and Engineering</h3>
        <h4 className="text-1xl text-gray-600 font-semi mb-2">(2021-2025)</h4>
        <h2 className="text-1xl text-gray-600 font-semi mb-2">Grade: 8 CGPA</h2>
          <div className="flex flex-wrap justify-center"></div>
          <p className="text-1xl text-gray-400 font-semi mb-2">Currently, I am pursuing B.Tech in Computer Science and Engineering Branch from Pranveer Singh Institute of Technology, Kanpur and During my academic journey, I have developed foundational skills in Data Structures, Database Management System, OOPs, Operating System and Computer Network. and I also got an opportunity to work upon some projects to showcase my skills and to improve my problem solving abilitites.</p>
        </div>
        </div>
        </div>

  )
}

export default Education
