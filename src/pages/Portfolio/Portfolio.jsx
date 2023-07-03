
import { FaSignal } from "react-icons/fa";
import MERNImageOne from "../../../public/portfolio_pic/MERN-1.jpeg"
import MERNImageTwo from "../../../public/portfolio_pic/MERN-2.jpeg"
import MERNImageThree from "../../../public/portfolio_pic/MERN-3.jpeg"
import MERNImageFour from "../../../public/portfolio_pic/MERN-4.jpeg"

import { useState } from "react";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import LazyLoad from 'react-lazy-load';
import PageHeader from "../../components/PageHeader";

const portfolioData = [
    {
        id: 3,
        name: 'MusiQuest',
        image: MERNImageOne,
        description: ' Musical Course marketplace with dashboards',
        client: 'https://github.com/nhhasib/MusiQuest#musiquest-online-musical-education-website',
        server: 'https://github.com/nhhasib/MusiQuest-Server',
        liveSite: 'https://musiquest-daec0.web.app/'
    },
    {
        id: 3,
        name: 'Toy Heaven',
        image: MERNImageTwo,
        description: 'Toy marketplace with user auth and CRUD',
        client: 'https://github.com/nhhasib/Toy-Heaven',
        server: 'https://github.com/nhhasib/Toy-Heaven-server',
        liveSite: 'https://toy-heaven-3e4ff.web.app/'
    },
    {
        id: 2,
        name: 'Mexi Cook',
        image: MERNImageThree,
        description: 'Mexican Chef’s showcase web-application',
        client: 'https://github.com/nhhasib/Mexi-Cook',
        server: 'https://github.com/nhhasib/Mexi-Cook-Server',
        liveSite: 'https://mexicook-f555c.web.app/'
    },
    {
        id: 2,
        name: 'Job Scape',
        image: MERNImageFour,
        description: 'Job hunting web-application',
        client: 'https://github.com/nhhasib/Job-Scape',
        liveSite: 'https://lively-griffin-ba045c.netlify.app/'
    }
]

const categorysData = [
    {
        filterId: 1,
        label: "ALL"
    },
    {
        filterId: 2,
        label: "BASIC"
    },
    {
        filterId: 3,
        label: "MERN"
    }
]

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);

    const handleFilteredValue = currentId => {
        setFilteredValue(currentId);
    }


    const filteredItem = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue)


    return (
        <div>
            <PageHeader headerText="Portfolio" icon={<FaSignal size={40} />} />

            <Animate
                play
                duration={1}
                start={{ transform: "translateX(-200px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <ul className="flex items-center gap-x-10 mx-auto mt-8 md:mt-6 text-white border border-dotted rounded-full border-green-300 w-56 px-4 py-2">
                    {
                        categorysData.map((category) => (
                            <li onClick={() => handleFilteredValue(category.filterId)} className={category.filterId === filteredValue ? 'active cursor-not-allowed' : 'cursor-pointer'} key={category.filterId}>
                                {category.label}
                            </li>
                        ))
                    }
                </ul>
            </Animate>

            <Animate
                play
                duration={1}
                start={{ transform: "translateY(500px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <div className="grid md:grid-cols-3 gap-5 mt-8 p-4 mx-auto max-w-[1320px]">
                    {
                        filteredItem.length !== 0 ? <>
                            {
                                filteredItem.map(item => (
                                    <div key={item.name.trim()} className="card bg-slate-900 mb-8 shadow-2xl">
                                        <LazyLoad>
                                            <div className="h-64 w-full">
                                                <img className="h-full w-full object-cover" src={item.image} alt={item.name} />
                                            </div>
                                        </LazyLoad>
                                        <div className="card-body items-center">
                                            <h2 className="card-title">{item.name}</h2>
                                            <p>{item.description}</p>
                                            <div className="flex justify-between mt-2 items-center gap-6">
                                                <Link to={item.client} target="_blank" className=" text-orange-500">#Client</Link>
                                                {
                                                    portfolioData.server !== item.server ? <Link to={item.server} target="_blank" className=" text-red-500">#Server</Link> : ''
                                                }
                                                <Link to={item.liveSite} target="_blank" className=" text-amber-400">Live Preview</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </> : <p className="mx-8">No Items Found</p>
                    }
                </div>
            </Animate>
        </div>
    );
};
export default Portfolio;