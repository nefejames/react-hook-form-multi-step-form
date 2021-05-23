import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function BillingInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Billing Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <p className={styles.errorText}>Shipping address is required</p>
          )}
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}
