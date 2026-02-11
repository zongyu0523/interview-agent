from fastapi import APIRouter

from backend.graph.prompts import clear_prompt_cache

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.post("/clear-prompt-cache")
async def clear_cache():
    """Clear cached prompts so next call re-fetches from LangSmith."""
    clear_prompt_cache()
    return {"status": "ok", "message": "Prompt cache cleared"}
