import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Datumsoft() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Sr. Software Engineer{" "}
        <span className="text-textGreen tracking-wide">@Datumsoft</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Apr 2010 to Jun 2014</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engieersm designers,
          producers and clients on a daily basis
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engieersm designers,
          producers and clients on a daily basis
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engieersm designers,
          producers and clients on a daily basis
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engieersm designers,
          producers and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
}

export default Datumsoft;
