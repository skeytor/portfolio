import GithubIcon from "../icons/GitHub";
import { ExternalLink } from "../icons/ExternalLink";
import { Project } from "../types";

interface Props {
  project: Project;
}

export const CardProject = ({
  project: { description, tags, title, github, link, isPrivate },
}: Props) => {
  return (
    <article className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-gray-700/50 bg-gray-900/40 hover:border-gray-600 transition-colors duration-300">
      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-gray-100">{title}</h3>
          <span
            className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium
              ${isPrivate
                ? "bg-gray-800 text-gray-400 border border-gray-600"
                : "bg-emerald-900/50 text-emerald-400 border border-emerald-700/60"
              }`}
          >
            {isPrivate ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Private
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Public
              </>
            )}
          </span>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between flex-wrap gap-3 mt-auto pt-2">
          {/* Icons only */}
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag.name} title={tag.name}>
                <span className={`flex items-center justify-center p-1.5 rounded-md ${tag.class}`}>
                  {tag.icon}
                </span>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {!isPrivate && github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 text-sm font-medium text-gray-200 transition-all duration-200"
              >
                <GithubIcon className="size-4" />
                Code
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white transition-colors duration-200"
              >
                <ExternalLink className="size-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
