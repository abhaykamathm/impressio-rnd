import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SplitCasting = () => {
  const navigate = useNavigate();
  const [savedLayouts, setSavedLayouts] = useState([]);
  const [mappedLayouts, setMappedLayouts] = useState([]);
  const [loadingLayouts, setLoadingLayouts] = useState(true);
  const [loadingMappedLayouts, setLoadingMappedLayouts] = useState(true);

  useEffect(() => {
    const fetchSavedLayouts = async () => {
      try {
        const response = await axios.get(
          "https://ig.gov-cloud.ai/tf-entity-ingestion/v1.0/schemas/66c70d6af604240f964044a0/instances/list",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MjEyMzE0NDYsImlhdCI6MTcyMTE5NTQ0NiwianRpIjoiMmU3OGIwNmItNzNiNi00NWU4LWI5MDAtZjRkOGQyOWQ0NGY3IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJlMDY2YmJlNC1jOGFjLTRiMTQtOTQxZS0yNGQ4Y2M4NmU5ZjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJIT0xBQ1JBQ1kiLCJzZXNzaW9uX3N0YXRlIjoiYjJjOGE1MWQtYjM4YS00NWUzLWIyZjYtYTYxOGQ1MzU3ZWU0IiwibmFtZSI6Ik1vYml1cyBpbXByZXNzaW9AbW9iaXVzZHRhYXMuYWkiLCJnaXZlbl9uYW1lIjoiTW9iaXVzIiwiZmFtaWx5X25hbWUiOiJpbXByZXNzaW9AbW9iaXVzZHRhYXMuYWkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwYXNzd29yZF90ZW5hbnRfaW1wcmVzc2lvQG1vYml1c2R0YWFzLmFpIiwiZW1haWwiOiJwYXNzd29yZF90ZW5hbnRfaW1wcmVzc2lvQG1vYml1c2R0YWFzLmFpIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7IkhPTEFDUkFDWSI6eyJyb2xlcyI6WyJIT0xBQ1JBQ1lfVVNFUiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiYjJjOGE1MWQtYjM4YS00NWUzLWIyZjYtYTYxOGQ1MzU3ZWU0IiwidGVuYW50SWQiOiJlMDY2YmJlNC1jOGFjLTRiMTQtOTQxZS0yNGQ4Y2M4NmU5ZjcifQ==.gD4SPmJeu9yayTl8lgViRsh3l7mONE19x1xTXph8uXtqy4TZVz-OBaEYpv1sae3-LabpXGoPWXRIPXmEQu97hhicYUq5I5xyWutGC0xaA67mPNkqWfDh6NsFOKT6zBO3Myhr19dFNUQoTDAAgdBxx0U8KIz4GawORELo5KO5I4xVHDF0GLlzwDYNLFoIg1VTkpJHOTq-tnGr-dIK3TT7M4UJMir404r4JpZcf_ch1pU5Z3WpLer9q1tT-r5vCZxWAzwH32kEnnnsd0IdemXy_f5d903_t_JoBkwub5WNbk-t6159jG1dExyRizlvI0ozcmM4ZCZXI4FsQup-kZEDvg`,
            },
          }
        );
        setSavedLayouts(response.data.entities);
        setLoadingLayouts(false);
      } catch (error) {
        console.error("Error fetching saved layouts:", error);
        setLoadingLayouts(false);
      }
    };

    const fetchMappedLayouts = async () => {
      try {
        const response = await axios.get(
          "https://ig.gov-cloud.ai/tf-entity-ingestion/v1.0/schemas/66c713e54006bd33cd1a3663/instances/list",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MjEyMzE0NDYsImlhdCI6MTcyMTE5NTQ0NiwianRpIjoiMmU3OGIwNmItNzNiNi00NWU4LWI5MDAtZjRkOGQyOWQ0NGY3IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJlMDY2YmJlNC1jOGFjLTRiMTQtOTQxZS0yNGQ4Y2M4NmU5ZjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJIT0xBQ1JBQ1kiLCJzZXNzaW9uX3N0YXRlIjoiYjJjOGE1MWQtYjM4YS00NWUzLWIyZjYtYTYxOGQ1MzU3ZWU0IiwibmFtZSI6Ik1vYml1cyBpbXByZXNzaW9AbW9iaXVzZHRhYXMuYWkiLCJnaXZlbl9uYW1lIjoiTW9iaXVzIiwiZmFtaWx5X25hbWUiOiJpbXByZXNzaW9AbW9iaXVzZHRhYXMuYWkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwYXNzd29yZF90ZW5hbnRfaW1wcmVzc2lvQG1vYml1c2R0YWFzLmFpIiwiZW1haWwiOiJwYXNzd29yZF90ZW5hbnRfaW1wcmVzc2lvQG1vYml1c2R0YWFzLmFpIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7IkhPTEFDUkFDWSI6eyJyb2xlcyI6WyJIT0xBQ1JBQ1lfVVNFUiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiYjJjOGE1MWQtYjM4YS00NWUzLWIyZjYtYTYxOGQ1MzU3ZWU0IiwidGVuYW50SWQiOiJlMDY2YmJlNC1jOGFjLTRiMTQtOTQxZS0yNGQ4Y2M4NmU5ZjcifQ==.gD4SPmJeu9yayTl8lgViRsh3l7mONE19x1xTXph8uXtqy4TZVz-OBaEYpv1sae3-LabpXGoPWXRIPXmEQu97hhicYUq5I5xyWutGC0xaA67mPNkqWfDh6NsFOKT6zBO3Myhr19dFNUQoTDAAgdBxx0U8KIz4GawORELo5KO5I4xVHDF0GLlzwDYNLFoIg1VTkpJHOTq-tnGr-dIK3TT7M4UJMir404r4JpZcf_ch1pU5Z3WpLer9q1tT-r5vCZxWAzwH32kEnnnsd0IdemXy_f5d903_t_JoBkwub5WNbk-t6159jG1dExyRizlvI0ozcmM4ZCZXI4FsQup-kZEDvg`,
            },
          }
        );
        setMappedLayouts(response.data.entities);
        setLoadingMappedLayouts(false);
      } catch (error) {
        console.error("Error fetching mapped layouts:", error);
        setLoadingMappedLayouts(false);
      }
    };

    fetchSavedLayouts();
    fetchMappedLayouts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <nav className="p-4 flex justify-center items-center border-b-2 border-gray-300 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xl shadow-md">
        ImpressIO - Split Screen Casting
      </nav>

      <div className="p-6 flex-1 grid grid-cols-1 gap-6">
        {/* Saved Layouts Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Saved Layouts
            </h2>
            <button
              onClick={() => navigate("/layout-builder")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Create New Layout
            </button>
          </div>

          {loadingLayouts ? (
            <div className="text-center text-gray-600">Loading layouts...</div>
          ) : savedLayouts.length === 0 ? (
            <div className="text-center text-gray-600">
              No layouts available.
            </div>
          ) : (
            <ul className="space-y-2">
              {savedLayouts.map((layout) => (
                <li
                  key={layout.layout_id}
                  className="p-3 border rounded-md shadow-sm bg-gray-50"
                >
                  {layout.layout_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mapped Layouts Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Mapped Layouts
          </h2>

          {loadingMappedLayouts ? (
            <div className="text-center text-gray-600">
              Loading mapped layouts...
            </div>
          ) : mappedLayouts.length === 0 ? (
            <div className="text-center text-gray-600">
              No mapped layouts available.
            </div>
          ) : (
            <ul className="space-y-2">
              {mappedLayouts.map((mappedLayout) => (
                <li
                  key={mappedLayout.layout_id}
                  className="p-3 border rounded-md shadow-sm bg-gray-50"
                >
                  {mappedLayout.layout_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitCasting;
