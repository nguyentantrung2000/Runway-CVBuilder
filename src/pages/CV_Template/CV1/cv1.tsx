import './cv1.css'
import { ButtonCreate } from '../../../components/button/button'
export const CV1 = (props:any) => {
    console.log("props data ne" ,props)
    if(props.dataCV == undefined){
        return <h1> haha </h1>
    }
    return (
        <div style={{height:'5rem'}} className="CV1BodyDiv">
            <head>

                <title>Jonathan Doe | Web Designer, Director | name@yourdomain.com</title>
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />

                <meta name="keywords" content="" />
                <meta name="description" content="" />

                <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />
                <link rel="stylesheet" type="text/css" href="resume.css" media="all" />

            </head>
            <body>

                <div id="doc2" className="yui-t7">
                    <div id="inner">

                        <div id="hd">
                            <div className="yui-gc">
                                <div className="yui-u first">
                                    <h1>{props.dataCV.CVDetails.Fname} {props.dataCV.CVDetails.Lname} </h1>
                                    <h2>Web Designer, Director</h2>
                                </div>

                                <div className="yui-u">
                                    <div className="contact-info">
                                        <h3><a id="pdf" href="#">Download PDF</a></h3>
                                        <h3><a href="mailto:name@yourdomain.com">{props.dataCV.CVDetails.Email}</a></h3>
                                        <h3>{props.dataCV.CVDetails.phone}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="bd">
                            <div id="yui-main">
                                <div className="yui-b">

                                    <div className="yui-gf">
                                        <div className="yui-u first">
                                            <h2>Profile</h2>
                                        </div>
                                        <div className="yui-u">
                                            <p className="enlarge">
                                            {props.dataCV.CVDetails.Bio}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="yui-gf">
                                        <div className="yui-u first">
                                            <h2>Skills</h2>
                                        </div>
                                        <div className="yui-u">

                                            <div className="talent">
                                                <h2>{props.dataCV.CVDetails.Skills}</h2>
                                                <p>Assertively exploit wireless initiatives rather than synergistic core competencies.	</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="yui-gf">
                                        <div className="yui-u first">
                                            <h2>Technical</h2>
                                        </div>
                                        <div className="yui-u">
                                            <ul className="talent">
                                                <li>XHTML</li>
                                                <li>CSS</li>
                                                <li className="last">Javascript</li>
                                            </ul>

                                            <ul className="talent">
                                                <li>Jquery</li>
                                                <li>PHP</li>
                                                <li className="last">CVS / Subversion</li>
                                            </ul>

                                            <ul className="talent">
                                                <li>OS X</li>
                                                <li>Windows XP/Vista</li>
                                                <li className="last">Linux</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="yui-gf">

                                        <div className="yui-u first">
                                            <h2>Experience</h2>
                                        </div>

                                        <div className="yui-u">

                                            <div className="job">
                                                <h2>Facebook</h2>
                                                <h3>Senior Interface Designer</h3>
                                                <h4>2005-2007</h4>
                                                <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence. </p>
                                            </div>

                                            <div className="job">
                                                <h2>Apple Inc.</h2>
                                                <h3>Senior Interface Designer</h3>
                                                <h4>2005-2007</h4>
                                                <p>Progressively reconceptualize multifunctional "outside the box" thinking through inexpensive methods of empowerment. Compellingly morph extensive niche markets with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks strategic theme areas rather than scalable benefits. </p>
                                            </div>

                                            <div className="job">
                                                <h2>Microsoft</h2>
                                                <h3>Principal and Creative Lead</h3>
                                                <h4>2004-2005</h4>
                                                <p>Intrinsicly transform flexible manufactured products without excellent intellectual capital. Energistically evisculate orthogonal architectures through covalent action items. Assertively incentivize sticky platforms without synergistic materials. </p>
                                            </div>


                                            <div className="job last">
                                                <h2>International Business Machines (IBM)</h2>
                                                <h3>Lead Web Designer</h3>
                                                <h4>2001-2004</h4>
                                                <p>Globally re-engineer cross-media schemas through viral methods of empowerment. Proactively grow long-term high-impact human capital and highly efficient innovation. Intrinsicly iterate excellent e-tailers with timely e-markets.</p>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="yui-gf last">
                                        <div className="yui-u first">
                                            <h2>Education</h2>
                                        </div>
                                        <div className="yui-u">
                                            <h2>Indiana University - Bloomington, Indiana</h2>
                                            <h3>Dual Major, Economics and English &mdash; <strong>4.0 GPA</strong> </h3>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div id="ft">
                            <p>{props.dataCV.CVDetails.Fname} {props.dataCV.CVDetails.Lname} &mdash; <a href="mailto:name@yourdomain.com">{props.dataCV.CVDetails.Email}</a> &mdash; {props.dataCV.CVDetails.phone}</p>
                        </div>

                    </div>


                </div>


            </body>
        </div>
    )
}
