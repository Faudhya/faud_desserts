import React, { useState } from "react";

export default function SensitiveInputGroup(props) {
    const [eyeMode, setEyeMode] = useState(false);

    const ToggleVisibility = () => {
        if (eyeMode) {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
            );
        } else {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
            );
        }
    };

    return (
        <>
            <div className="align-self-start me-auto pt-1 mb-1">
                {props.formik.errors[props.field] &&
                props.formik.touched[props.field] ? (
                    <label htmlFor={props.field} className="text-danger">
                        {props.origin}
                    </label>
                ) : (
                    <label htmlFor={props.field}>{props.origin}</label>
                )}
                {props.star && <span className="fw-bold text-danger">*</span>}
            </div>
            <div className="input-group flex-nowrap mb-4">
                <div className="d-flex flex-column w-100">
                    <div className="d-flex flex-row input-group">
                        <button
                            className="btn btn-outline-secondary mr-2"
                            type="button"
                            id="button-reveal"
                            onClick={() => setEyeMode(!eyeMode)}
                        >
                            <ToggleVisibility />
                        </button>
                        {eyeMode ? (
                            <input
                                type="text"
                                className="form-control"
                                placeholder={props.origin}
                                id={props.field}
                                name={props.field}
                                value={props.formik.values[props.field]}
                                onChange={props.formik.handleChange}
                                onBlur={props.formik.handleBlur}
                            />
                        ) : (
                            <input
                                type="password"
                                className="form-control"
                                placeholder={props.origin}
                                id={props.field}
                                name={props.field}
                                value={props.formik.values[props.field]}
                                onChange={props.formik.handleChange}
                                onBlur={props.formik.handleBlur}
                            />
                        )}
                    </div>
                    {props.formik.errors[props.field] &&
                        props.formik.touched[props.field] && (
                            <div
                                className="text-danger ms-1 position-absolute"
                                style={{ bottom: "-1.45em" }}
                            >
                                <i className="bi bi-exclamation-triangle me-1"></i>
                                <small>
                                    {props.formik.errors[props.field]}
                                </small>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
}
