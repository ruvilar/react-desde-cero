import React from 'react';

const Curso2 = () => (
    <div className="ed-grid m-grid-3 r-section">
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png" alt="Poster del curso CSS Avanzado"/>
            </div>

            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                Programación de CSS Avanzado 2020 con EDteam
            </h3>
            
            <div className="s-mb-2 s-main-center card-teachers">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-ml-6">
                        <div className="circle img-container">
                        <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/f6336b38-6d94-4837-bfbe-b1ce8db64c2f.jpg" alt="Alejandro"/>
                        </div>
                    </div>
                <span className="small">Alejandro Romolo</span>
                </div>

                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-ml-6">
                        <div className="circle img-container">
                        <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg" alt="Alvaro"/>
                        </div>
                    </div>
                <span className="small">Alvaro Felipe</span>
                </div>

                <div className="card__teacher s-cross-center">
                <div className="card__avatar s-ml-6">
                    <div className="circle img-container">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GheDvAexjV17XaAM_XSAUl7-Cs9dA2mrJ4MUgLXxw" alt="Rodolfo"/>
                    </div>
                </div>
                <span className="small">Rodolfo Vilar</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$30 USD</a>
            </div>
            </div>
        </article>
    </div>
)

export default Curso2