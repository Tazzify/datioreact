function CopyrightComponent(props) {
        return (
                <h4 id="copyright">
                        @ Copyright {props.year} {props.company}
                </h4>
        );
}

export default CopyrightComponent;
