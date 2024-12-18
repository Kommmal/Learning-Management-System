import React from 'react'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div className="rightSide">
    <div className="section1">
        <h1 className="main_heading">Dashboard</h1>
        <hr />
        <div className="progress_divs">
            <div>
                <h1>2</h1>
                <h5>Courses in progress</h5>
            </div>
            <div>
                <h1>2</h1>
                <h5>Courses in progress</h5>
            </div>
            <div>
                <h1>2</h1>
                <h5>Courses in progress</h5>
            </div>
        </div>
    </div>
    <div className="section2">
        <div className="container">
            <div className="flex">
                <div className="totalProgress"></div>
                <div className="value">80%</div>
            </div>

            <div className="progressValues">
                <h4>NextJs crash course</h4>
                <div className="flex">
                    <div className="rect r2"></div>
                    <div className="value">50%</div>
                </div>
            </div>
            <h3 className="sec_mainHeading">Progress chart</h3>
            <div className="progressValues">
                <h4>NextJs crash course</h4>
                <div className="flex">
                    <div className="rect r3"></div>
                    <div className="value">40%</div>
                </div>
            </div>

            <div className="progressValues">
                <h4>NextJs crash course</h4>
                <div className="flex">
                    <div className="rect r4"></div>
                    <div className="value">10%</div>
                </div>
            </div>

        </div>
    </div>
    <div className="section3">
        <div className="container">
            <h3 className="sec_mainHeading">Recently accessed</h3>
            <h5>Today</h5>
            <option value="">React crash course</option>
            <h5>yesterday</h5>
            <option value="">a very long course name</option>
            <h5>Older</h5>
            <option value="">React crash course</option>
            <option value="">React crash course</option>
            <option value="">React crash course</option>
        </div>
    </div>
</div>

  )
}

export default Dashboard