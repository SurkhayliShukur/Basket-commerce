import React from 'react'
import { Dialog } from '@headlessui/react';

const DeleteSingle = (props) => {

    const { isModalOpen, setIsModalOpen, removeFromBasket, selectedProductId } = props;

    return (
        <>
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] ">
                    <div className="bg-white rounded-lg p-5 ">
                        <h2 className="text-xl font-semibold">Remove Product</h2>
                        <p>
                            Are you sure you want to remove this product from your basket?
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => {
                                    removeFromBasket(selectedProductId);
                                    setIsModalOpen(false);
                                }}
                                className="bg-red-700 text-white px-4 py-2 rounded-md"
                            >
                                Remove
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="ml-2 bg-gray-400 text-white px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default DeleteSingle
