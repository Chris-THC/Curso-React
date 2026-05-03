import React from "react";
// import "./Result.css";

const BasicCard: React.FC = () => (
  <div className="card">
    <div className="header basic">
      <h2>Basic</h2>
    </div>
    <div className="content">
      <p className="price">
        $19<span>/mo</span>
      </p>
      <ul>
        <li>5 Projects</li>
        <li>20 GB Storage</li>
        <li>Basic Support</li>
        <li>1 User</li>
      </ul>
      <button className="btn-outline">CHOOSE PLAN</button>
    </div>
  </div>
);

const ProCard: React.FC = () => (
  <div className="card">
    <div className="header pro">
      <h2>Pro</h2>
    </div>
    <div className="content">
      <p className="price">
        $49<span>/mo</span>
      </p>
      <ul>
        <li>15 Projects</li>
        <li>50 GB Storage</li>
        <li>Priority Support</li>
        <li>5 Users</li>
      </ul>
      <button className="btn-solid">CHOOSE PLAN</button>
    </div>
  </div>
);

const EnterpriseCard: React.FC = () => (
  <div className="card">
    <div className="header enterprise">
      <h2>Enterprise</h2>
    </div>
    <div className="content">
      <p className="price">
        $99<span>/mo</span>
      </p>
      <ul>
        <li>Unlimited Projects</li>
        <li>500 GB Storage</li>
        <li>24/7 Support</li>
        <li>Unlimited Users</li>
      </ul>
      <button className="btn-green">CHOOSE PLAN</button>
    </div>
  </div>
);

const Title: React.FC = () => (
  <h1 className="title">Choose Your Perfect Plan</h1>
);

const Result: React.FC = () => {
  return (
    <div className="container">
      <Title />
      <div className="pricing-grid">
        <BasicCard />
        <ProCard />
        <EnterpriseCard />
      </div>
    </div>
  );
};

export default Result;
