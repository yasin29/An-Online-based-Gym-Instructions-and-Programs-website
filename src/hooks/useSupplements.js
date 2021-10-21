import { useEffect } from "react";
import { useState } from "react";

const useSupplements = () => {
    const [supplements, setSupplements] = useState([]);
    useEffect(() => {
        fetch('./suppliments.json')
            .then(res => res.json())
            .then(data => setSupplements(data))
    }, [])
    return [supplements, setSupplements];
};

export default useSupplements;