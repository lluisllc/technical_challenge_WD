import { useState, useEffect, useContext } from 'react';
import React from "react";
import { getAllPhonesService, getPhoneDetailsService } from './services/phone.services';


function PhonesListPage() {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllPhones = async () => {
        try {
            const response = await getAllPhonesService();
            setPhones(response.data);
            setLoading(false);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllPhones();
    }, []);

    return (
        <div>
            <div>
               {phones.map((phone) => {
                    return <SubjectCard key={phone._id} {...phone} />
                }
                )}
            </div>
        </div>
    );
}
export default PhonesListPage;