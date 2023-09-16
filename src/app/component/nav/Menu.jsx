import TopHeader from "./mobileHeader/TopHeader";
import TopMenu from "./mobileHeader/TopMenu";

const Menu = () => {

    return (
        <>
            <div className="md:hidden shadow-md">
                <TopHeader />
                <TopMenu />
            </div>
        </>
    );
}

export default Menu;
