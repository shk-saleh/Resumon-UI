import React, { useEffect } from "react";
import { FileText, Mail, TrendingUp } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import { useAuthStore } from "../../store/useAuthStore";
import { formatDistanceToNow } from "date-fns";

const Overview = () => {
  const { resumes, fetchResumes } = useResumeStore();
  const { user } = useAuthStore();

  // Fetch real resumes on mount
  useEffect(() => {
    fetchResumes();
  }, [fetchResumes]);

  // Real stats from API
  const totalDocuments = resumes.length;
  const downloadsThisMonth = resumes.filter(r => {
    const date = new Date(r.updatedAt);
    return date > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  }).length;

  const stats = [
    {
      title: "Total Documents",
      value: totalDocuments,
      subtitle: "Across all projects",
      icon: FileText,
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#1A9369]",
    },
    {
      title: "Downloads",
      value: downloadsThisMonth,
      subtitle: "In the last month",
      icon: TrendingUp,
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#1A9369]",
    },
    {
      title: "Success Rate",
      value: "85%",
      subtitle: "Across project deadlines",
      icon: TrendingUp,
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#1A9369]",
    },
  ];

  // Real recent documents from API
  const recentDocuments = resumes
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 6)
    .map((resume) => ({
      name: resume.title || "Untitled Resume",
      date: resume.updatedAt
        ? formatDistanceToNow(new Date(resume.updatedAt), { addSuffix: true })
        : "Just now",
      status: resume.status === "completed" ? "Completed" : "Draft",
      statusColor: resume.status === "completed" ? "text-[#1A9369]" : "text-[#F59E0B]",
      bgColor: resume.status === "completed" ? "bg-[#E8F5E9]" : "bg-[#FEF3C7]",
    }));

  return (
    <div className="min-h-screen space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome back, {user?.name?.split(" ")[0] || "User"}!
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Ready to create your next professional document?
        </p>
      </div>

      {/* Stats - Your original design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.title}</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h2>
                <p className="text-gray-400 text-xs">{stat.subtitle}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions - Your original design */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => window.location.href = "/builder"}
            className="bg-[#E8F5E9] rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
          >
            <FileText className="w-8 h-8 text-[#1A9369] mb-3" />
            <h3 className="text-base font-semibold text-gray-800 mb-1">Create new resume</h3>
            <p className="text-sm text-gray-600">Build a professional resume with AI assistance</p>
          </div>
          <div className="bg-[#FEF3C7] rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow">
            <Mail className="w-8 h-8 text-[#F59E0B] mb-3" />
            <h3 className="text-base font-semibold text-gray-800 mb-1">Create new Letter</h3>
            <p className="text-sm text-gray-600">Build a professional letter with AI assistance</p>
          </div>
        </div>
      </div>

      {/* Recent Documents - Your original design with real data */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentDocuments.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No resumes yet. Create your first one!
            </div>
          ) : (
            recentDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => window.location.href = `/resume/${resumes[index]._id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#1A9369]" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">{doc.name}</h3>
                      <p className="text-xs text-gray-400">{doc.date}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z" fill="currentColor"/>
                      <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="currentColor"/>
                      <path d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <span className={`text-xs font-medium px-3 py-1 rounded ${doc.bgColor} ${doc.statusColor}`}>
                    {doc.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;