import React from 'react'
import { Dialog } from '@headlessui/react';

const DeleteAll = (props) => {
    const { isRemoveAllModalOpen, setIsRemoveAllModalOpen, removeAllProducts } = props;
    return (
        <>
            <Dialog
                open={isRemoveAllModalOpen}
                onClose={() => setIsRemoveAllModalOpen(false)}
            >
                <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                    <div className="bg-white rounded-lg p-5">
                        <h2 className="text-xl font-semibold">Remove All Products</h2>
                        <p>
                            Are you sure you want to remove all products from your basket?
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={removeAllProducts}
                                className="bg-red-600 text-white px-4 py-2 rounded-md"
                            >
                                Remove All
                            </button>
                            <button
                                onClick={() => setIsRemoveAllModalOpen(false)}
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

export default DeleteAll
