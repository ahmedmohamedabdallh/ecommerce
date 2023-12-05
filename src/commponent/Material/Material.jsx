
import React from 'react'

export default function Material() {
    function submitData(e) {
        e.preventDefault();
    }
  return (
    <>
     <div className='container vv'>
         <div className="row login">
            <div className="form">
            <form onSubmit={submitData} className="" action="">
                <div className="text">
                    <h5 className="text-center  "> Add Material </h5>
                    
                </div>
                <div className="row">

                    <div className="col-md-12 mb-2">
                        <div className="form-group">

                            <input  type="text" className="form-control" name="materialCode" id="materialCode"
                                placeholder="Material Code" required="" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-2">
                        <div className="form-group">

                            <input  type="text" className="form-control" name="materialName" id="materialName"
                                placeholder="Material Name" required="" />
                        </div>
                    </div>


                    <div className="col-md-12 text-center my-1">
                    <div className="form-group">

<input  type="text" className="form-control" name="materialType" id="materialType"
    placeholder="Material Type" required="" />
</div>

                    </div>
                </div>
                <div className="col-md-12 text-center mt-2">
                    <button type='submit' className="btn btn-primary">Add</button>
                </div>
            </form>
            </div>
            </div>
            </div> 
    </>
  )
}
