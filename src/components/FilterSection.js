import FilterType from './FilterTypeButton';


function FilterSection() {
        return (
                <div className="filter">
                        <FilterType
                                name="filter_type"
                                className="brand"
                                defaultOption="Produkttyp"
                                options={["Processor", "Grafikkort", "Moderkort", "Nätaggregat", "Chassi", "Kylning"]}
                        />
                        <FilterType
                                name="filter_type"
                                className="brand"
                                defaultOption="Varumärken"
                                options={["AMD", "Intel", "Nvidia", "Asus", "MSI"]}
                        />
                        <FilterType
                                name="filter_type"
                                className="brand"
                                defaultOption="Pris"
                                options={[]}
                        />
                        <FilterType
                                name="filter_type"
                                className="brand"
                                defaultOption="Tillgänglighet"
                                options={["Online (Allt)", "Online (i lager)", "Butikslager"]}
                        />
                </div>
        );
}

export default FilterSection;