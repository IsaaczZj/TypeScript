import { useNavigate } from "react-router-dom";
import { nomesAlimentos } from "../types";
import { Field, Form, Formik } from "formik";
import styles from "./CalcChurrasco.module.css";
import * as Yup from "yup";

const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number().min(1, "Numero de pessoas é obrigatorio"),
  selecaoAlimentos: Yup.array()
    .of(Yup.string())
    .test(
      "check-selecaoAlimentos",
      "Selecione pelo menos um alimento",
      (array) => array !== null && array!.length > 0
    ),
});

const CalcChurrasco = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Formik
        onSubmit={(values) => {
          navigate("/resultado", {
            state: {
              pessoas: values.pessoas,
              alimentosSelecionados: values.selecaoAlimentos,
            },
          });
        }}
        initialValues={{ pessoas: 0, selecaoAlimentos: [] }}
        validationSchema={esquemaValidacao}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="pessoas">
                Numero de pessoas
              </label>
              <Field name="pessoas" type="number" className={styles.inputField}/>
              {errors.pessoas && touched.pessoas ? (
                <p className={styles.error}>{errors.pessoas}</p>
              ) : null}
            </div>
            <h2>Selecione os alimentos para o churrasco:</h2>
            {Object.keys(nomesAlimentos).map((alimento) => (
              <div>
                <Field
                  type="checkbox"
                  name="selecaoAlimentos"
                  value={alimento}
                  className={styles.checkBoxInput}
                  
                />
                <label className={styles.inputLabel} htmlFor="selecaoAlimentos">
                  {nomesAlimentos[alimento]}
                </label>
              </div>
            ))}
            {errors.selecaoAlimentos && touched.selecaoAlimentos ? (
              <p className={styles.error}>{errors.selecaoAlimentos}</p>
            ) : null}
            <button className={styles.calculateBtn} type="submit">Calcular</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CalcChurrasco;
