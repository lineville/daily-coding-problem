require "rspec"
require_relative "../lib/main"
require_relative "../lib/term"

describe "Main" do
  it "should be satisfiable" do
    # (¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a) --> [(¬c, b), (b, c), (¬b, c), (¬c, ¬a)]

    expect(satisfiable?([
      [Term.new("c", true), Term.new("b")],
      [Term.new("b"), Term.new("c")],
      [Term.new("b", true), Term.new("c")],
      [Term.new("c", true), Term.new("a", true)],
    ])).to eq(true)
  end

  it "should be satisfiable" do

    expect(satisfiable?([
      [Term.new("a"), Term.new("b")],
      [Term.new("b"), Term.new("a", true)],
      [Term.new("a"), Term.new("b", true)],
      [Term.new("a", true), Term.new("b", true)],
    ])).to eq(false)
  end
end
