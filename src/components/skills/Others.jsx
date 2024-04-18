import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Others = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Others</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Git</h3>
                            
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">GitHub</h3>
                            
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Netlify</h3>

                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">VS Code</h3>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Others;