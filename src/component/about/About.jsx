import Button from "../button/button";
const About = () => {
    return (
        <div className="about-us-container w-full h-full flex justify-center">
            <div className="about-us mt-[100px] w-[600px] h-[350px] p-8 shadow-2xl grid">
                <div className="description">
                    <p className="text-xl">Hey...,</p>
                    <p className="w-[400px] mt-4 text-2xl text-justify">
                        I am Sumit Gandhi, Currently I am pursuing my BCA from
                        &nbsp;
                        <a
                            href="https://www.ecb.ac.in"
                            rel="noreferrer"
                            className=" text-[#1B1F3B] font-bold"
                            target="_blank"
                        >
                            Engineering College Bikaner
                        </a>
                    </p>
                </div>
                <div className="btns flex justify-start gap-5 items-center">
                    <a
                        href="https://www.linkedin.com/in/sumit-gandhi/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            ButtonText="Linkedin"
                            className="bg-blue-600 text-white m-0 p-2"
                            onClick={() => {
                                return;
                            }}
                        />
                    </a>
                    <a
                        href="https://github.com/sumitgandhi2003"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            ButtonText="GitHub"
                            className="bg-black text-white m-0 p-2"
                            onClick={() => {
                                return;
                            }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
