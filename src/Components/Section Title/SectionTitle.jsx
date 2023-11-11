const SectionTitle = ({ subTitle, title }) => {
    return (
        <div className="md:w-[300px] mx-auto text-center mt-20 mb-10">
            <p className="text-yellow-600 italic">{subTitle}</p>
            <h3 className="text-4xl border-y-4 my-3 py-3">{title}</h3>
        </div>
    );
};

export default SectionTitle;