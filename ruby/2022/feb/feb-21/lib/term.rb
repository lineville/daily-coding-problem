class Term
  attr_accessor :variable, :negated

  def initialize(variable, negated = false)
    @variable = variable
    @negated = negated
  end

  def to_s
    if @negated
      return "¬" + @variable
    else
      return @variable
    end
  end
end
