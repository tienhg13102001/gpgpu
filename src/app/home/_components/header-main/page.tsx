import "./index.scss";

const HeaderMain = () => {
    const a = 2
    console.log("🚀 ~ HeaderMain ~ a:", a)
    
    return (
        <section className="header-main">
            <div className="bread">
                <div className="bread-item">
                    <div className="bread-item-right active">Device</div>
                    <div className="bread-item-left">Reward</div>
                </div>
            </div>
        </section>
    );
};
export default HeaderMain;
