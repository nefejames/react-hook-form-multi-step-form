import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function PersonalInfo({ formStep, nextFormStep }) {
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
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Personal Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className={styles.errorText}>Email is required</p>
          )}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
