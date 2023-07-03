
const PageHeader = (props) => {
    const { headerText, icon } = props;

    return (
        <div className="mt-6 border-b-2 border-dotted border-orange-400">
            <div className="flex justify-between items-center mx-8 md:mx-24 mb-2">
                <h2 className="text-3xl text-orange-400">{headerText}</h2>
                <span className="text-orange-400">{icon}</span>
            </div>
        </div>
    );
};

export default PageHeader;