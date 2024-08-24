import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHotkeys } from 'react-hotkeys-hook';
import TextEditor from '../TextEditor';
import './index.css';

const OneBoxScreen = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/onebox/list');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/onebox/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleReply = (id) => {
        setSelectedItem(id);
    };

    useHotkeys('d', () => {
        if (selectedItem) handleDelete(selectedItem);
    });

    useHotkeys('r', () => {
        if (selectedItem) handleReply(selectedItem);
    });

    return (
        <div className="onebox-screen">
            <h1>OneBox Screen</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id} onClick={() => setSelectedItem(item.id)}>
                        {item.title}
                    </li>
                ))}
            </ul>
            {selectedItem && <TextEditor threadId={selectedItem} />}
        </div>
    );
};

export default OneBoxScreen;
