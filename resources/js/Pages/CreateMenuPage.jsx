import React, { useState } from "react"
import SideBar from "../components/sidebar";
import Header from "../components/header";

export default function CreateMenuPage({ errors }) {

    //define state
    const [product_name, setproduct_name] = useState('');
    const [product_desc, setproduct_desc] = useState('');

    //function "storePost"
    const storePost = async (e) => {
        e.preventDefault();

        Inertia.post('/posts', {
            product_name: product_name,
            cproduct_desc: product_desc
        });
    }

    return (
        <div className="row" style={{ marginTop: '100px' }}>
            <div className="col-12">
                <div className="card border-0 rounded shadow-sm border-top-success">
                    <div className="card-header">
                        <span className="font-weight-bold">TAMBAH POST</span>
                    </div>
                    <div className="card-body">
                        <form onSubmit={storePost}>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Title</label>
                                <input type="text" className="form-control" value={title} onChange={(e) => setproduct_name(e.target.value)} placeholder="Masukkan Judul Post" />
                            </div>
                            {errors.title && (
                                <div className="alert alert-danger">
                                    {errors.title}
                                </div>
                            )}

                            <div className="mb-3">
                                <label className="form-label fw-bold">Content</label>
                                <textarea className="form-control" value={content} onChange={(e) => product_desc(e.target.value)} placeholder="Masukkan Judul Post" rows={4}></textarea>
                            </div>
                            {errors.content && (
                                <div className="alert alert-danger">
                                    {errors.content}
                                </div>
                            )}

                            <div>
                                <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default MenuPage